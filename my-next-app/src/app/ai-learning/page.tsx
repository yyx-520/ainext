export default function AILearning() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">AI学习</h1>
      <ol className="list-decimal list-inside space-y-2">
        <li>机器学习基础</li>
        <li>深度学习基础</li>
        <li>自然语言处理</li>
      </ol>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">代码示例</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`import tensorflow as tf
model = tf.keras.Sequential([
  tf.keras.layers.Dense(10, activation='relu'),
  tf.keras.layers.Dense(1)
])`}
        </pre>
      </div>
    </div>
  );
}
