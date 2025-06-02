export default async function PhotoPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();

  return (
    <main>
      <h1>Photos List</h1>
      <ul>
        {photos.slice(0, 10).map((photo) => ( // limitando para não carregar 5000 fotos
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
// Note: The above code fetches photos from the JSONPlaceholder API and displays the first 10 photos with their thumbnails and titles.