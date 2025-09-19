```jsx
// src/App.jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Insight Stream News</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Cards (Example) */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article
              key={item}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                News Headline {item}
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="text-blue-500 mt-2 inline-block">
                Read more →
              </a>
            </article>
          ))}
        </section>
      </main>
[9/19, 6:30 PM] ChatGPT: <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © 2025 Insight Stream. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
```
