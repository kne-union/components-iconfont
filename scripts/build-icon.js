const path = require("path");
const fs = require("fs-extra");
const svgstore = require("svgstore");
const crypto = require("crypto");
const {pinyin} = require("pinyin-pro");

const output = {};

const rootDir = process.cwd(), srcDir = path.resolve(rootDir, 'src/icon'),
    distDir = path.resolve(rootDir, 'public/icon-build');

(async () => {
    console.log('开始处理彩色图标');
    await (async () => {
        const dir = path.resolve(srcDir, "colorful");
        const renderTemplate = (svgStr) => `var dom = document.getElementById('icon-color');dom && dom.parentElement.removeChild(dom);dom = document.createElement('div');dom.setAttribute("aria-hidden", "true");dom.setAttribute("id", "icon-color");dom.style.position = "absolute";dom.style.width = 0;dom.style.height = 0;dom.style.overflow = "hidden";dom.innerHTML = '${svgStr}';document.body.append(dom);`;

        const files = await fs.readdir(dir);
        const sprites = svgstore({renameDefs: true});
        const list = [];
        for (let name of files) {
            const baseName = name.replace(path.extname(name), "");
            const newName = "icon-color-" + pinyin(baseName, {
                toneType: "none", type: "array", v: true
            }).join("");
            const file = await fs.readFile(path.resolve(dir, name), "utf8");
            sprites.add(newName, file);
            list.push({
                name: newName, font_class: newName
            });
        }

        const svgStr = sprites.toString().replace(/[\n\r]*/g, "");
        const md5 = crypto.createHash("md5");
        const md5Str = md5.update(svgStr).digest("hex");
        const outputName = "font_colorful_" + md5Str.slice(0, 12);
        const outputDir = path.resolve(distDir, outputName);
        await fs.emptydir(outputDir);
        await fs.writeFile(path.resolve(outputDir, "iconfont.js"), renderTemplate(svgStr));
        await fs.writeFile(path.resolve(outputDir, "iconfont.svg"), svgStr);
        await fs.writeJson(path.resolve(outputDir, "iconfont.json"), {
            "glyphs": list
        });
        await fs.writeFile(path.resolve(rootDir, 'src/colorful-fonts.js'), `const colorfulFonts = ${JSON.stringify({
            "glyphs": list
        })};export default colorfulFonts;`);
        output.colorful = outputName;
    })();
    console.log('彩色图标处理完成:', output.colorful);
    const fontDirs = ['font', 'fontAi'];
    console.log('开始复制字体图标');
    await (async () => {
        for (let index = 0; index < fontDirs.length; index++) {
            const fontDir = fontDirs[index];
            const dir = path.resolve(srcDir, fontDir);
            const keyFile = await fs.readFile(path.resolve(dir, 'iconfont.json'));
            const md5 = crypto.createHash("md5");
            const md5Str = md5.update(keyFile).digest("hex");
            const outputName = fontDir + '_' + md5Str.slice(0, 12);
            await fs.copy(dir, path.resolve(distDir, outputName));
            await fs.writeFile(path.resolve(rootDir, `src/${fontDir}s.js`), `const ${fontDir}s = ${JSON.stringify(await fs.readJson(path.resolve(distDir, outputName, 'iconfont.json')))};export default ${fontDir}s;`);
            output[fontDir] = outputName;
        }
    })();
    console.log('字体图标复制完成:', output.font, output['fontAi']);
    console.log('开始复制国旗图标');
    await (async () => {
        const dir = path.resolve(srcDir, "country-flag");
        const renderTemplate = (svgStr) => `var dom = document.getElementById('icon-color-flag');dom && dom.parentElement.removeChild(dom);dom = document.createElement('div');dom.setAttribute("aria-hidden", "true");dom.setAttribute("id", "icon-color-flag");dom.style.position = "absolute";dom.style.width = 0;dom.style.height = 0;dom.style.overflow = "hidden";dom.innerHTML = '${svgStr}';document.body.append(dom);`;
        const files = await fs.readdir(dir);
        const sprites = svgstore({renameDefs: true});
        for (let name of files) {
            const baseName = name.replace(path.extname(name), "");
            const newName = "icon-color-flag-" + pinyin(baseName, {
                toneType: "none", type: "array", v: true
            }).join("");
            const file = await fs.readFile(path.resolve(dir, name), "utf8");
            sprites.add(newName, file);
        }
        const svgStr = sprites.toString().replace(/[\n\r]*/g, "");

        const keyFile = await fs.readFile(path.resolve(dir, 'countries.json'));
        const md5 = crypto.createHash("md5");
        const md5Str = md5.update(keyFile).digest("hex");
        const outputName = "country_flag_" + md5Str.slice(0, 12);
        await fs.copy(dir, path.resolve(distDir, outputName));
        await fs.writeFile(path.resolve(path.resolve(distDir, outputName), "countries.svg"), svgStr);
        await fs.writeFile(path.resolve(path.resolve(distDir, outputName), "countries.js"), renderTemplate(svgStr));
        output.country_flag = outputName;
        await fs.writeFile(path.resolve(rootDir, 'src/countries.js'), `const countries = ${JSON.stringify(await fs.readJson(path.resolve(distDir, outputName, 'countries.json')))}; export default countries;`);
    })();
    console.log('国旗图标复制完成:', output.country_flag);
    console.log('写入结果文件');
    await fs.writeJson(path.resolve(distDir, 'manifest.json'), output);
    await fs.writeJson(path.resolve(rootDir, 'src/manifest.json'), output);
    console.log('执行完成:', JSON.stringify(output, null, 2));
})().catch((err) => {
    throw err;
});
