
import requests

def analyze_vcf(file_path):
    variants = []
    with open(file_path, 'r') as f:
        for line in f:
            if line.startswith("#"):
                continue
            parts = line.strip().split('\t')
            if len(parts) > 3:
                chrom = parts[0]
                pos = parts[1]
                ref = parts[3]
                alt = parts[4]
                variants.append((chrom, pos, ref, alt))
                if len(variants) >= 3:
                    break

    results = []
    for chrom, pos, ref, alt in variants:
        variant_str = f"{chrom}:{pos}:{ref}:{alt}"
        ensembl_url = f"https://rest.ensembl.org/vep/human/region/{variant_str}?"
        response = requests.get(ensembl_url, headers={"Content-Type": "application/json"})
        if response.status_code == 200:
            data = response.json()
            if data and isinstance(data, list):
                result = {
                    "Variant": variant_str,
                    "Gene": data[0].get("gene_symbol", "Unknown"),
                    "Consequence": data[0].get("most_severe_consequence", "Unknown"),
                    "ClinVar": data[0].get("clin_sig", ["Unknown"])
                }
                results.append(result)
    return results
