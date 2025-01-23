package gsgroup12.src.backend;

public class MutualFund {
    private int id;
    private String name;
    private String ticker;
    private String category;
    private double beta;
    private double expenseRatio;
    private double returnRate;

    public MutualFund(int id, String name, String ticker, String category, double beta, double expenseRatio, double returnRate) {
        this.id = id;
        this.name = name;
        this.ticker = ticker;
        this.category = category;
        this.beta = beta;
        this.expenseRatio = expenseRatio;
        this.returnRate = returnRate;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTicker() {
        return ticker;
    }

    public String getCategory() {
        return category;
    }

    public double getBeta() {
        return beta;
    }

    public double getExpenseRatio() {
        return expenseRatio;
    }

    public double getReturnRate() {
        return returnRate;
    }
}
