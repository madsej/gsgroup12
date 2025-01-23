package gsgroup12.src.backend;
import java.util.Scanner;

public class InvestmentCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter mutual fund ticker (e.g., VFIAX): ");
        String ticker = scanner.nextLine();
        System.out.print("Enter your initial investment amount: ");
        double principal = scanner.nextDouble();
        System.out.print("Enter the investment duration in years: ");
        int years = scanner.nextInt();
        InvestmentService investmentService = new InvestmentService();
        try {
            double beta = investmentService.getBeta(ticker);
            double marketReturnRate = investmentService.getMarketReturnRate();
            double futureValue = investmentService.calculateFutureValue(principal, beta, marketReturnRate, years);
            System.out.printf("The future value of your investment is: $%.2f\n", futureValue);
        } catch (Exception e) {
            System.out.println("Error fetching data: " + e.getMessage());
        }
        scanner.close();
    }
}
//Enter mutual fund ticker (e.g., VFIAX): VFIAX
//Enter your initial investment amount: 200000
//Enter the investment duration in years: 3
//The future value of your investment is: $269971.76
