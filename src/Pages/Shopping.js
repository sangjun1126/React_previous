import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JsConfetti from "./js-confetti";

function Shopping() {
  const jsConfetti = new JsConfetti();
  const handleClick = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
  };
  return <button onClick={handleClick}>클릭!</button>;
}

export default Shopping;
