import Image from "next/image"

function BookCoverPage({imageUrl}:any) {
  return (
    <div><Image src={imageUrl} alt="Book Cover" width={500} height={500} /></div>
  )
}

export default BookCoverPage