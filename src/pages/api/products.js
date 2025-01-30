// pages/api/products.js

let products = [
    {
        id: 1,
        name: "Arizona Pizza",
        price: "9",
        image: "/Arizona Cream.jpg",
    },
    {
        id: 2,
        name: "Mexican Treat",
        price: "12",
        image: "/Mexican Treat.jpg",
    },
    {
        id: 3,
        name: "Fiery Feast",
        price: "10",
        image: "/Fiery Feast.jpg",
    },
    {
        id: 4,
        name: "Chicago Bulls",
        price: "15",
        image: "/Chicago Bulls.jpg",
    },
    {
        id: 5,
        name: "Maryland",
        price: "8",
        image: "./Maryland Delight.jpg",
    },
    {
        id: 6,
        name: "Ohio Thrill",
        price: "5",
        image: "/Ohio Thrill.jpg",
    },
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Return the list of products
        return res.status(200).json(products);
    }

    if (req.method === 'DELETE') {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Product id is required" });
        }

        const productIndex = products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Remove the product from the list
        products = products.filter(product => product.id !== id);

        return res.status(200).json({ message: "Product deleted successfully" });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
}

