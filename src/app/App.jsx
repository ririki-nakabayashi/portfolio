import React, {useMemo} from "react"
import { useSelector, useDispatch } from "react-redux"
import Introduction from "./pages/Introduction"
import Info from "./pages/Info"

export default function App() {
  const page = useSelector(state => state.page)
  const dispatch = useDispatch();
  const content = useMemo(() => {
    switch (page) {
      case "INTRODUCTION":
        return <Introduction />
      case "INFO":
        return <Info />
      default:
        return <Introduction />
    }
  }, [page])
  return (
    <>
      <div>ヘッダー</div>
      <button onClick={() => dispatch({type: `PAGE_UPDATE`, page: "INTRODUCTION"})}>トップ</button>
      <button onClick={() => dispatch({type: `PAGE_UPDATE`, page: "INFO"})}>お問い合わせ</button>
      {content}
    </>
  )
}
