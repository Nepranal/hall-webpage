import ImageCardWithDetails from "./ImageCardWithDetails";

export default function FootNote() {
  return (
    <div>
      <ImageCardWithDetails
        component={
          <div>
            <p>image</p>
            <p>
              Reprehenderit minim pariatur magna in occaecat dolore. Ad et
              aliquip non id. Officia est ipsum elit exercitation occaecat Lorem
            </p>
          </div>
        }
      />
      <div>
        <p>Contact</p>
        <div>Address</div>
        <div>
          Quis dolore cillum cupidatat deserunt fugiat ut ut eiusmod est eiusmod
        </div>
        <p>Map</p>
        <div>
          <p>Phone number</p>
          <p>email</p>
        </div>
      </div>
      <div>Links</div>
      <div>Directions</div>
      <div>Copyright banner</div>
    </div>
  );
}
