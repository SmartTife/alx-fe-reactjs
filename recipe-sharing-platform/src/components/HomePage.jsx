import { useEffect, useState } from "react";
import recipesData from "../data.json"; // vite can import json directly

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // simulate loading on mount
  useEffect(() => {
    setRecipes(recipesData);

    // If you prefer a real fetch from src/, use:
    // const url = new URL("../data.json", import.meta.url);
    // fetch(url).then(r => r.json()).then(setRecipes);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Recipe Sharing Platform
          </h1>
          <p className="mt-1 text-gray-600">
            Browse community favorites and discover your next meal.
          </p>
        </header>

        {/* Responsive grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <article
              key={r.id}
              className="group bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden transition
                         hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={r.image}
                alt={r.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />

              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {r.title}
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  {r.summary}
                </p>

                <a
                  href={`#/recipes/${r.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View recipe →
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
