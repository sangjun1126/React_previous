import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div className="App">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">
            메인 화면
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="DustKorea">
            미세먼지 확인하기
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="DustAI">
            AI 분석
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="ReactMusic">
            ReactMusic
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Shopping">
            Shopping
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Board">
            커뮤니티
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Register">
            회원가입
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
