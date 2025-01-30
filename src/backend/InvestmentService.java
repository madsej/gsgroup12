package gsgroup12.src.backend;

public class InvestmentService {
    private static final double DEFAULT_BETA = 1.0;
    private static final double DEFAULT_MARKET_RETURN = 0.10;
    private static final double RISK_FREE_RATE = 0.02;

    public double calculateFutureValue(double principal, double beta, double marketReturnRate, int years) {
        double rate = RISK_FREE_RATE + beta * (marketReturnRate - RISK_FREE_RATE);
        return principal * Math.pow(Math.E, rate * years);
    }

    public double getBeta(String ticker) {
        try {
            return DEFAULT_BETA;
        } catch (Exception e) {
            System.err.println("Beta fetch failed for " + ticker + ": " + e.getMessage());
            return DEFAULT_BETA;
        }
    }

    public double getMarketReturnRate() {
        try {
            return DEFAULT_MARKET_RETURN;
        } catch (Exception e) {
            System.err.println("Market return fetch failed: " + e.getMessage());
            return DEFAULT_MARKET_RETURN;
        }
    }
}
