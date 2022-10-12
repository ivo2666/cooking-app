import PlaceholderCard from "../placeholder-card"

const RecipesLoading: React.FC = () => {
    return (
        <div className=" min-h-screen flex flex-wrap gap-5 pt-8">
        {[1, 2, 3, 4].map(el => (
            <PlaceholderCard key={el} />
        ))}
        </div>
    )
}

export default RecipesLoading