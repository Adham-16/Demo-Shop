


export function ImageSlider({ images }) {
  return (
    <>
      <div className=" carousel  carousel-center space-x-4 bg-neutral rounded-box">
        {images.map((image) => {
          return (
            <div key={image} className=" carousel-item">
              <img
                className=" w-96  object-cover rounded-box lg:w-64 "
                loading="lazy"
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </div>

    </>
  )
}
