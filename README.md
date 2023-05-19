Collection of sexy React Hooks ready to install with NPM

- [ ] useTitle : react document의 title을 몇 개의 hooks와 함께 바꾸는 것.

const useTitle = (initialTitle) => {
const [title, setTitle] = useState(initialTitle);
console.log(title);
const updateTitle = () => {
const htmlTitle = document.querySelector("title");
htmlTitle.innerText = title;
};
useEffect(updateTitle, [title]);
return setTitle;
};

- [ ] useInput : input을 역할

const useInput = (initialValue, validator) => {
const [value, setValue] = useState(initialValue);
const onChange = (event) => {
const {
target: { value }
} = event;
let willUpdate = true;
if (typeof validator === "function") {
willUpdate = validator(value);
}
if (willUpdate) {
setValue(value);
}
};
return { value, onChange };
};

- [ ] useBeforeLeave : 유저가 page를 벗어나는 시점을 발견하고 함수를 실행함.
- [ ] useClick : 누군가 element를 클릭하는 시점을 발견.
      const useClick = (onClick) => {
      const element = useRef();
      useEffect(() => {
      if (typeof onClick !== "function") {
      return;
      }
      if (element.current) {
      element.current.addEventListener("click", onClick);
      }
      return () => {
      if (element.current) {
      element.current.removeEventListener("click", onClick);
      }
      };
      }, []);
      return element;
      };
- [ ] useFadeIn : 어떤 element든 상관없이 애니메이션을 Element안으로 서서히 사라지게 만듬.
- [ ] useFullscreen : 어떤 element든 풀스크린으로 만들거나 일반 화면으로 돌아가게 할 수 있음.
- [ ] useHover : 어떤 것에 마우스를 올렸을 때 감지.
- [ ] useNetwork : Online 또는 Offline 상태인지를 감지.
- [ ] useNotification : notification API를 사용할 때 유저에게 알림을 보냄.
- [ ] useScroll : 스크롤을 사용할 때를 감지해 알려줌.
- [ ] useTabs : 웹 사이트에 메뉴 또는 무엇이든간에 tab을 사용하기 매우 쉽게 만들어 줌.

const useTabs = (initialTab, allTabs) => {
if (!allTabs || !Array.isArray(allTabs)) {
return;
}
const [currentIndex, setCurrentIndex] = useState(initialTab);
return {
currentItem: allTabs[currentIndex],
changeItem: setCurrentIndex
};
};

- [ ] usePreventLeact : 유저가 변경사항이나 무엇이든간에 저장하지 않고 페이지를 벗어나길 원할 때 확인 하는 것.
- [ ] useConfirm : 어떤 기능이 존재
- [ ] useAxios : HTTP requests client axios 을 위한 wrapper 같은 것.

- 리액트 Hooks 10분만에 사용법 배우기 | Learn How to use React Hooks in 10 min
  https://www.youtube.com/watch?v=yS-BU6eYUDE
