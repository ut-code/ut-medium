import Link from "next/link";
import React from "react";
// const ReturnTop: React.FunctionComponent = () => {
// 	return (
//       <Link href={{pathname: `/`}}>
//         <div>トップへ戻る
//         </div>
//       </Link>
// 	)
// }

class ReturnTop extends React.Component {
	render() {
		return (
			<Link href={{pathname: `/`}}>
				<div>トップへ戻る
				</div>
			</Link>
		)
	}
}

export default ReturnTop;