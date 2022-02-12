import { Html, useProgress } from "@react-three/drei";
import useStore from "../useStore";

function MainScreen() {
  const { progress } = useProgress();
  const start = useStore((state) => state.start);
  const move = useStore((state) => state.move);
  const startGame = useStore((state) => state.startGame);
  return (
    <Html center>
      <div className={`mainScreen ${start ? "fadeOut" : ""}`}>
        <img src="/logo.jpeg" alt="" className="logo" />
        {progress < 100 ? (
          <div className="loadingContainer">
            <div className="loading" style={{ width: `${progress}%` }} />
          </div>
        ) : (
          <button className="startBtn" onClick={startGame}>
            Start
          </button>
        )}
        <footer>
          Made by{" "}
          <a
            href="https://twitter.com/MarkSShenouda"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark Shenouda
          </a>
        </footer>
      </div>

      {/* <div className="move" style={{ color: move ? "green" : "red" }}>
        {move ? "Run" : "Stop"}
      </div>
      <div className="timer">20</div> */}
    </Html>
  );
}

export default MainScreen;
