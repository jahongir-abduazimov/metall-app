import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata({ params }) {
  try {
    const metallTypesRes = await fetch(
      "http://192.168.0.105:8001/api/metals/types/",
      { cache: "no-store" }
    );
    const metallTypes = metallTypesRes.ok ? await metallTypesRes.json() : [];
    const currentType = metallTypes.find(
      (type) => type.id.toString() === params.id
    );

    if (currentType) {
      return {
        title: currentType.name,
        description: `Поставка, продажа и покупка ${currentType.name.toLowerCase()}. Цены, характеристики, применение. Профессиональные услуги по закупке и реализации металлов.`,
        keywords: [
          currentType.name.toLowerCase(),
          "поставка металлов",
          "продажа металлов",
          "покупка металлов",
          "сплавы",
          "цены",
          "характеристики",
          "применение",
          "закупка металлов",
        ],
        openGraph: {
          title: `${currentType.name} - Поставка, продажа и покупка металлов`,
          description: `Поставка, продажа и покупка ${currentType.name.toLowerCase()}. Цены, характеристики, применение. Профессиональные услуги по закупке и реализации металлов.`,
          type: "website",
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: "Металлы",
    description:
      "Поставка, продажа и покупка металлов и сплавов. Цены, характеристики, применение. Профессиональные услуги по закупке и реализации металлов.",
  };
}

export default async function Home({ params }) {
  const metallTypesRes = await fetch(
    "http://192.168.0.105:8001/api/metals/types/",
    { cache: "no-store" }
  );
  const metallTypes = metallTypesRes.ok ? await metallTypesRes.json() : [];

  const blogRes = await fetch(
    `http://192.168.0.105:8001/api/metals/types/${params.id}/blogs/`,
    { cache: "no-store" }
  );
  const blog = blogRes.ok ? await blogRes.json() : [];

  const categoryRes = await fetch(
    `http://192.168.0.105:8001/api/metals/types/${params.id}/prices/`,
    { cache: "no-store" }
  );
  const category = categoryRes.ok ? await categoryRes.json() : [];

  const currentType = metallTypes.find(
    (type) => type.id.toString() === params.id
  );

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Металлы", href: "/metalls" },
    ...(currentType ? [{ label: currentType.name }] : []),
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-30">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* <Breadcrumbs items={breadcrumbItems} /> */}
      </div>
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-5 hidden md:block">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Металлы</h2>
            <div className="mt-3 space-y-2 text-blue-700 flex flex-col">
              {metallTypes.map((item) => (
                <Link
                  href={`/metalls/${item.id}`}
                  key={item.id}
                  className="hover:underline cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-col gap-10 w-full">
          {blog.map((item) => (
            <article key={item.id} className="flex-1 p-6">
              <header>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h1>
              </header>
              <div className="relative w-full h-52 rounded-md overflow-hidden mb-4">
                {item.image && (
                  <Image
                    src={
                      blog[0]?.image.slice(0, 4) === "http"
                        ? blog[0]?.image
                        : `http://192.168.0.105:8001${item.image}`
                    }
                    alt={`${item.title} - Поставка, продажа и покупка металлов`}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </div>
            </article>
          ))}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Цены на метал
            </h2>

            <div className="border border-gray-200 rounded-md overflow-hidden">
              <table
                className="w-full text-sm text-left"
                role="table"
                aria-label="Цены на металлы"
              >
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-3 py-3">Наименование металлолома</th>
                    <th className="px-3 py-3">Цена, руб./кг розница</th>
                    <th className="px-3 py-3">Цена, руб./кг опт</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((metal, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-3 py-3">
                        <p className="font-medium">{metal.category_name}</p>
                        <p className="text-gray-600 text-xs">
                          {/* {metal.description} */}
                        </p>
                      </td>
                      <td className="px-3 py-3 font-medium">
                        {metal.retail_price}
                      </td>
                      <td className="px-3 py-3 font-medium">
                        {metal.wholesale_price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
