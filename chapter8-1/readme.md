#代码分离
把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。
代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

- SplitChunksPlugin：去除重复引入的模块。
- mini-css-extract-plugin：用于将 CSS 从主应用程序中分离。
- bundle-loader：用于分离代码和延迟加载生成的 bundle。
- promise-loader：类似于 bundle-loader ，但是使用了 promise API。
