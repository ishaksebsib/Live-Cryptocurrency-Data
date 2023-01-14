import TradeViewChart from "react-crypto-chart";

export default function LiveChart() {
  return (
    <TradeViewChart
      interval="5m"
      containerStyle={{
        minHeight: "300px",
        maxHeight: "400px",
        minWidth: "600px",
        maxWidth: "100%",
        marginBottom: "30px",
      }}
      pair="ETHUSDT"
    />
  );
}
