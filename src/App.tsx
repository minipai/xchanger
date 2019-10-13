import React from "react";
import Big from "big.js";
import { Dimmer, Loader } from "semantic-ui-react";
import { useTransition, animated } from "react-spring";
import CuccencyFieldSet from "./components/CuccencyFieldSet";
import CuccencyBase from "./components/CuccencyBase";
import Layout from "./components/Layout";
import useMoneyReduer from "./hooks/useMoneyReducer";
import useExchangeratesData from "./hooks/useExchangeratesData";
import AppContext from "./context/AppContext";

const App: React.FC = () => {
  const [state, dispatch] = useMoneyReduer();
  const appContext = { state, dispatch };
  const { rates, loading } = useExchangeratesData(state.base);
  const transitions = useTransition(state.moneys, item => item.id, {
    from: { top: "-300px", position: "relative", marginBottom: "0px" },
    enter: { top: "0px", opacity: 1 },
    leave: { opacity: 0, marginBottom: "-90px" }
  });

  if (!rates) {
    return null;
  }

  return (
    <AppContext.Provider value={appContext}>
      <Layout>
        <h1>The XChanger</h1>
        <div>
          <CuccencyBase></CuccencyBase>
        </div>

        <Dimmer active={loading}>
          <Loader />
        </Dimmer>

        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div key={item.id} style={props}>
              <CuccencyFieldSet
                data={item}
                disableRemove={state.moneys.length === 1}
                amount={Big(state.amount)
                  .times(rates[item.currency])
                  .toFixed(4)}
              ></CuccencyFieldSet>
            </animated.div>
          );
        })}
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
