import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setError('Please fill out all fields.');
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'),
    };

    console.log('New Recipe Submitted:', newRecipe);
    // TODO: Save the recipe or post to a server

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Ingredients (one per line)</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">Preparation Steps (one per line)</label>
          <textarea
            rows="6"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
