## Ejercicios sencillos 4

[apuntes](https://drive.google.com/open?id=13bNDS6c3sN3wVr0YrYo2i_Sy7xHwCHhu)

#### Ejercicio 1
Una tienda hace una encuesta a sus usuarios para conocer su satisfacción. Se pide evaluen la tienda con una nota del 1 al 10.
```
3  5  9  7  5  6  4
4  5  7  9  8  4  8
7  3  8  9  5  4 10
5  4  5  7
```


calcular:
- la desviación típica
- el recorrido relativo y el recorrido intercuatílico relativo.
- el coeficiente de variación media y el coeficiente de variación mediana .
- momento central de orden 3



#### Ejercicio 2
Se pregunta a un grupo de personas cuantás veces hace ejercicio al mes. Se obtienen los siguentes resultados una vez agrupados por intervalos

intervalos &nbsp;&nbsp;| frecuencias (<span v-katex="'n_i'"></span>) 
:------------- | ------------- | ---
[0, 2) | 1 
[2, 4) | 2       
[4, 6) | 8      
[6, 8) | 10       
[8, 10) | 7       
[10, 12) | 4        
[12, 14] | 1       
|

calcular:
- la desviación media, la varianza
- momento respecto al origen de orden 3
- momento central de orden 4


#### Ejercicio 3
dadas las siguientes muestras:
```
3  5  9  7  9  6  4
```

y

```
3  5  3  5  5  6  3
```

usar el coeficiente de variación media para decidir cual de las dos es más dispersa

#### Ejercicio 4 (test)
Para medir la dispersión de una variable estadística es mejor usar:
- la mediana
- la moda
- la desviación típica
- ninguna de las anteriores

#### Ejercicio 5 (test)
Tomo dos muestras <span v-katex="'(x_i)'"></span> y <span v-katex="'(y_i)'"></span>, la primera tiene desviación típica 3 y la 
segunda 5, ¿Cual de las dos está más dispersa?
- la primera <span v-katex="'(x_i)'"></span>
- la segunda  <span v-katex="'(y_i)'"></span>
- ambas están igualmente dispersas




<!--
id: ejercicios_estadistica_20191017
tags: estadistica, teaching, ejercicios
title: Ejercicios sencillos 2019-10-17
date: 17/10/2019
-->

<!--
 x <- c(3,  5,  9,  7,  5,  6,  4,  4,  5,  7,  9,  8,  4,  8,  7,  3,  8,  9,  5,  4, 10,  5,  4,  5,  7)
> table(binnedSamples)
binnedSamples
  (1,5]  (5,10] (10,15] (15,20] (20,25] (25,30] 
      9      12       2       0       0       0 
> summary(x)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
   3.00    4.00    5.00    6.04    8.00   10.00 
> x = rnorm(n=26, m=7, sd=3)
> x <- round(abs(x), digits=0)
> x
 [1]  5 10  8  4  5  8 10  2 10 11 12  9  1  7  8  7  9  9  7  8 11  8  8 11  2  6
> x <- c(3,  5,  9,  7,  5,  6,  4,  4,  5,  7,  9,  8,  4,  8,  7,  3,  8,  9,  5,  4, 10,  5,  4,  5,  7)
> median(x)
[1] 5
> sd(x)
[1] 2.071232
> 7/6.04
[1] 1.15894
> 4/5
[1] 0.8
-->
