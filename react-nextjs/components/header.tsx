import Image from 'next/image';
import Link from 'next/link';
import UtcodeImage from '../public/utc-logo.png';


function ShowLoginStatus(props: { session: any, status: string, className:string}) {
  if (props.status === "authenticated") {
    return (
      <div className={props.className}>
        <div>{props.session.user.name}</div>
      </div>
    )
  }
  return (
    <div className={props.className}>
      <span>   Not Logged in </span>
    </div>
  )
}

export default function Header(props: {session: any, status: string}) {

  return (
    <>
      <div className="\
        fixed top-0 left-0 right-0 p-2 h-12 \
        flex content-center items-center \
        bg-sky-50/90 \
      ">
        <div className="flex-none">
          <Link href={{ pathname: "/" }}>
            <a className=" flex content-center items-center">
              <Image height={827 / 30} width={3957 / 30} src={UtcodeImage} alt="image" />
              <span className="ml-2">
                ut-medium(仮)
              </span>
            </a>
          </Link>
        </div>
        <span className="ml-2">{props.location}</span>
        <ShowLoginStatus className="ml-auto" session={props.session} status={props.status} />
        <div className="ml-2">
          <Link className="" href={{ pathname: "/loginPage" }}>
            <a className="\
              items-center justify-center rounded-md p-2 \
              text-white bg-sky-600 hover:bg-sky-400 \
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white \
            ">
              login
            </a>
          </Link>
        </div>
      </div>

      <div className="h-14" />
    </>
  );
}
