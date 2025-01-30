package gsgroup12.src.backend;

import java.util.ArrayList;
import java.util.List;

public class MutualFundRepository {
    public static List<MutualFund> getHardcodedFunds() {
        List<MutualFund> mutualFunds = new ArrayList<>();
        mutualFunds.add(new MutualFund(1, "Vanguard 500 Index Fund", "VFIAX", "S&P 500 Index", 1.0, 0.04, 28.24));
        mutualFunds.add(new MutualFund(2, "Fidelity 500 Index Fund", "FXAIX", "S&P 500 Index", 1.0, 0.02, 28.28));
        mutualFunds.add(new MutualFund(3, "Vanguard Total Stock Market Index Fund;Admiral", "VTSAX", "Multi-Cap Core", 1.02, 0.04, 27.90));
        mutualFunds.add(new MutualFund(4, "Fidelity Government Money Market Fund", "SPAXX", "US Govt Money Mkt", 0.01, 0.42, 4.87));
        mutualFunds.add(new MutualFund(5, "Vanguard Federal Money Market Fund;Investor", "VMFXX", "US Govt Money Mkt", 0.01, 0.11, 5.18));
        mutualFunds.add(new MutualFund(6, "Fidelity Government Cash Reserves", "FDRXX", "US Govt Money Mkt", 0.01, 0.38, 4.90));
        mutualFunds.add(new MutualFund(7, "Goldman Sachs FS Government Fund;Institutional", "FGTXX", "Instl US Govt MMkt", 0.01, 0.18, 5.13));
        mutualFunds.add(new MutualFund(8, "JPMorgan US Government Money Market Fund;Capital", "OGVXX", "Instl US Govt MMkt", 0.01, 0.18, 5.12));
        mutualFunds.add(new MutualFund(9, "Morgan Stanley Inst Liq Government Port;Institutional", "MVRXX", "Instl US Govt MMkt", 0.01, 0.18, 5.14));
        return mutualFunds;
    }
}
