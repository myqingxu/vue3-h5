#### 开始
- 使用npm init vite-app vant-v3创建一个以vite搭建的vue3项目。
- 接着npm instal；npm run dev；

#### 目录结构
package.json：
``` 
{
  "name": "vant-v3",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.0.4"
  },
  "devDependencies": {
    "vite": "^1.0.0-rc.13",
    "@vue/compiler-sfc": "^3.0.4"
  }
}
```
其中**dependencies**代表生产环境依赖，指不论是开发过程中，或打包后的项目用到的依赖，比如常见的ui组件，axios。
**devDependencies**代表开发环境依赖，指只在开发情况下，可以通过这些依赖达到编译或者转译或打包等，比如常见的babel、css-loader。只是当做工具在开发过程中使用。