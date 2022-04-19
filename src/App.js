import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useContext, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Timer } from "./components/Timer";
import { AppContext } from "./contexts/AppContext";
import { withLocale } from "./hoc/withLocale";
import { Heading } from "./components/typography/Heading";
import { Paragraph } from "./components/typography/Paragraph";
import { Button } from "./components/Button";

const LocalizedRepositoryLink = withLocale(RepositoryLink);

function App() {
  const appState = useContext(AppContext);
  console.log(appState);
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [loginState, setLoginState] = useState(null);
  const [finishTime, setFinishTime] = useState(null);

  const handleSubmit = (answers, id) => setQuizAnswer({ answers, id });
  const handleStateChange = () => setActionCount((state) => state + 1);
  const handleLogin = (formState) => setLoginState(formState);
  const handleTimerFinish = (time) => setFinishTime(time);

  let answerComponents = null;

  if (quizAnswer !== null) {
    answerComponents = Object.keys(quizAnswer.answers).map((key) => {
      return (
        <div key={key}>
          {key}: {quizAnswer.answers[key]}
        </div>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Heading element="h1" size="6">
          Hello world!
        </Heading>
        <Heading element="h2" size="5">
          Hello world!
        </Heading>
        <Heading element="h3" size="4">
          Hello world!
        </Heading>
        <Button buttonType="primary" onClick={() => appState.setId("foo")}>
          Click me
        </Button>
        <Paragraph element="div">
          {appState.translate("currentLocale")}: {appState.locale}
        </Paragraph>
        <Button buttonType="primary" onClick={() => appState.setLocale("hr")}>
          HR
        </Button>
        <Button buttonType="secondary" onClick={() => appState.setLocale("en")}>
          EN
        </Button>
        <Button buttonType="ghost" onClick={() => appState.setLocale("de")}>
          DE
        </Button>
        <Paragraph element="p">Your action count is: {actionCount}</Paragraph>
        <RepositoryLink>View Repository</RepositoryLink>
        <LocalizedRepositoryLink>View Repository</LocalizedRepositoryLink>
        {loginState === null && <LoginForm onLogin={handleLogin} />}
        {loginState !== null && (
          <div>
            {loginState.name} ({loginState.email})
          </div>
        )}
        {quizAnswer === null && loginState !== null && (
          <>
            <Timer onTick={(time) => console.log(time)} onFinish={handleTimerFinish} />
            <Quiz onSubmit={handleSubmit} onStateChange={handleStateChange} />
          </>
        )}
        {quizAnswer !== null && answerComponents}
        {quizAnswer !== null && <div>{quizAnswer.id}</div>}
        {finishTime !== null && <div>{finishTime} s</div>}
      </header>
    </div>
  );
}

export default App;