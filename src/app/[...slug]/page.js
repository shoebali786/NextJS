import parse from "html-react-parser";
async function getFirstData(slug) {
  const res = await fetch(`https://www.carlelo.com/api/upcoming-cars/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({ params }) {
  const slug = params.slug[1];
  const data = await getFirstData(slug);
  console.log(data.model);
  return (
    <>
    <h1>Upcoming Deatils page</h1>
    <div className="col-sm-4 mb-3 mb-sm-0 mt-3">
      <div className="card">
        <img
          src={`https://www.carlelo.com/laravel/public/uploads/${data.model.image}`}
          class="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{data.model.title}</h5>
          <p className="card-text">{parse(`${data.model.description}`)}</p>
        </div>
      </div>
    </div>
    </>
  );
}
