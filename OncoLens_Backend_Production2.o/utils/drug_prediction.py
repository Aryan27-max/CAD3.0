
def predict_drugs(mutations, cancer_type):
    drugs_db = {
        "BRCA1": ["Olaparib", "Talazoparib"],
        "TP53": ["Pembrolizumab", "Nivolumab"]
    }

    recommended = []
    for mutation in mutations:
        if mutation in drugs_db:
            for drug in drugs_db[mutation]:
                recommended.append({
                    "Name": drug,
                    "Target Mutation": mutation,
                    "Cancer Type": cancer_type,
                    "Evidence Level": "Simulated Clinical Evidence"
                })
    return {
        "Cancer Type": cancer_type,
        "Input Mutations": mutations,
        "Recommended Drugs": recommended or [{"Message": "No matches found"}]
    }
