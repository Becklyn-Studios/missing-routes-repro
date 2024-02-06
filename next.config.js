const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fo-neoperlexport-eshop.opacc.net",
                port: "",
                pathname: "/CatCache/**",
            },
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "downloads.ctfassets.net",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "videos.ctfassets.net",
                port: "",
                pathname: "/**",
            },
        ],
    },

    async redirects() {
        return [
            {
                source: "/watersaving",
                destination: "/global/en/home/services/watersaving-calculator/",
                permanent: true,
            },
            {
                source: "/wassersparen",
                destination: "/global/de/home/service/wassersparrechner/",
                permanent: true,
            },
            {
                source: "/economieeau",
                destination: "/global/en/home/services/economieeau-fr/",
                permanent: true,
            },
            {
                source: "/gegendenstrom",
                destination: "/global/de/home/wassersparen/gegen-den-strom/",
                permanent: true,
            },
            {
                source: "/energysaving",
                destination: "/global/en/home/watersaving/energy-saving/",
                permanent: true,
            },
            {
                source: "/",
                destination: "/global/en/home",
                permanent: true,
            },
        ];
    },
});
