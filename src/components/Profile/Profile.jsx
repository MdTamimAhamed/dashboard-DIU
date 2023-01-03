
const Profile = ({imgUrl,profileTitle,subtitle,height,width}) => {
  return (
    <div className="flex justify-start items-center px-5 py-2 bg-white hover:bg-[rgba(0,0,0,0.08)] ease-in duration-100 rounded-md cursor-pointer">
        <div className="pr-3">
            <h1 className="font-bold text-sm">{profileTitle}</h1>
            <p className="text-sm text-lightGray">{subtitle}</p>
        </div>
        <img className="rounded-full"  src={imgUrl} height={height} width={width} alt="profile" />
    </div>
  )
}

export default Profile