export default function BuildTools() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">构建打包学习</h1>
      <ol className="list-decimal list-inside space-y-2">
        <li>Webpack 基础</li>
        <li>Vite 基础</li>
        <li>Rollup 基础</li>
      </ol>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">代码示例</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
};`}
        </pre>
      </div>
    </div>
  );
}
