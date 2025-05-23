import Link from "next/link";

export default function Home() {
  const topics = [
    { name: "前端基础知识", path: "/frontend-basics" },
    { name: "前端框架学习", path: "/frontend-frameworks" },
    { name: "Node学习", path: "/node-learning" },
    { name: "构建打包学习", path: "/build-tools" },
    { name: "算法学习", path: "/algorithms" },
    { name: "AI学习", path: "/ai-learning" },
    { name: "练习题", path: "/exercises" }, // 新增练习题模块路径
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-center mb-8">个人学习网站</h1>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <li key={topic.path} className="border p-4 rounded shadow hover:shadow-lg">
            <Link href={topic.path} className="text-lg font-medium hover:underline">
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
