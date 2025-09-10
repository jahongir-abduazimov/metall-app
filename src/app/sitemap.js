export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://metalls.example.com';

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

    // Only fetch dynamic data if we're not in build time or if API is available
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.105:8001/api/metals/types/";

    // Skip dynamic fetching during build if it's a local development URL
    if (!apiUrl.includes('192.168.0.105') || process.env.NODE_ENV === 'development') {
        try {
            const metallTypesRes = await fetch(apiUrl, {
                cache: "no-store",
                next: { revalidate: 3600 } // Revalidate every hour
            });

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
    }

    return [...staticPages, ...dynamicPages];
}
