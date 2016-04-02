#JNome
Jnome is a hackathon project that utilizes [genome.js](https://github.com/genomejs) to query publicly available genomes for useful insights. 

##About

Genosets are a combination of alleles at 2 or more loci, the form a defined set of genotypes https://www.snpedia.com/index.php/Genoset. Genosets are based on the idea of [Single Nucleotide Polymorphisms or SNPs](https://en.wikipedia.org/wiki/Single-nucleotide_polymorphism). SNPs can be found at specific loci of different chromosomes. A particular combination of SNPs is the foundation of a genoset.

JNome is based on these genetic concepts. See http://www.snpedia.com/index.php/Genoset for more information. Certain genosets are correlated with higher risks of diseases and other features. JNome uses[GQL](https://github.com/genomejs/gql) to parse raw genomes from companies lik 23andMe, Ancestry & DecodeMe into JSON. By querying these JSON objects, looking for specific differences(SNPS) at certain loci, we can determine if the genome in question contains a particular genoset.

##Usage

JNome analyzes over 35 genosets for different risk categories including:
+ General Tests
+ High Risk Tests
+ High Risk Cancer Tests
+ Low Risk Tests
+ Immunity Tests
+ Prevention Tests

JNome does some basic analysis of these risk factors, provides charts for each category and calculates an overall health score.

###Disclaimer

These results are simply based on correlations and publicly available data. Please consult a real physician if you have any questions.

##Technologies
+ Node.js
+ Angular
+ Express
+ Genome.js
+ GQL
+ D3
+ Chart.js

##Links
+ NPM: https://www.npmjs.com/package/genoset-238
+ Genome.js: https://github.com/genomejs
+ Github: https://github.com/jmeeke02/genomics_analyzer