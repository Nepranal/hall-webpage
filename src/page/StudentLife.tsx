import CardTabs from "../component/CardTabs";
import ImageCardWithDetails from "../component/ImageCardWithDetails";
import ImageCollator from "../component/ImageCollator";

export default function StudentLife() {
  return (
    <div>
      <div>
        <h1>Student Life</h1>
        <ul>
          <li>College Teams</li>
          <li>Flagship Events</li>
        </ul>
      </div>
      <div>
        <ImageCollator />
        <h2>College Teams</h2>
        <CardTabs
          cards={[
            { header: "Community Engagement", detail: <p></p> },
            { header: "Social & Cultural Diversity", detail: <p></p> },
            { header: "College Traditions & Event Support", detail: <p></p> },
            { header: "Academic & Student Well-being", detail: <p></p> },
          ]}
        />
      </div>
      <div>
        <h2>Flagship Events</h2>
        <ImageCardWithDetails />
        <ImageCardWithDetails />
        <ImageCardWithDetails />
        <ImageCardWithDetails />
      </div>
    </div>
  );
}
