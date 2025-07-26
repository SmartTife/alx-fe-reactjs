import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);

    return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {/* ✅ Link to recipe detail page */}
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
  