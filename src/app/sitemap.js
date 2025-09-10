export default async function sitemap() {
    const baseUrl = 'https://metalls.example.com';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Dynamic pages - metals
    let dynamicPages = [];

    try {
        const metallTypesRes = await fetch(
            "http://192.168.0.105:8001/api/metals/types/",
            {
                cache: "no-store",
                next: { revalidate: 3600 } // Revalidate every hour
            }
        );

        if (metallTypesRes.ok) {
            const metallTypes = await metallTypesRes.json();

            dynamicPages = metallTypes.map((type) => ({
                url: `${baseUrl}/metalls/${type.id}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error('Error fetching metals for sitemap:', error);
    }

    return [...staticPages, ...dynamicPages];
}
