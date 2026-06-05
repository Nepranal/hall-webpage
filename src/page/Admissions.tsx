import CardTabs from "../component/CardTabs";
import ImageCardWithDetails from "../component/ImageCardWithDetails";

export default function Admissions() {
  return (
    <div>
      <h1>Admissions</h1>
      <div>
        <h2>When should I apply?</h2>
        <p>Are you newly admitted to HKU?</p>
        <CardTabs
          cards={[
            { header: "Yes", detail: <div></div> },
            { header: "I'm a current HKU student", detail: <div></div> },
          ]}
        />
      </div>
      <div>
        <h2>Other FAQs</h2>
        <ul>
          <li>
            <div>
              <p>Q1</p>
              <p>A1</p>
            </div>
          </li>
        </ul>
      </div>
      <ImageCardWithDetails />
    </div>
  );
}
