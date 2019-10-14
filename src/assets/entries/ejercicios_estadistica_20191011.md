## Ejercicios sencillos 3

[apuntes](https://drive.google.com/open?id=13bNDS6c3sN3wVr0YrYo2i_Sy7xHwCHhu)

#### Ejercicio 1
Se quiere saber cuantas veces a la semana un grupo de personas consume comida rápida. Se pregunta a un conjunto de 25 personas y se obtienen los siguientes datos 

```
3 2 3 2 2 6 5 2 5 4 
2 3 4 4 4 4 3 4 3 5 
3 4 4 5 2 1
```

calcular:
- la media, la mediana
- los cuartiles 1 y 3 (<span v-katex="'Q_1'"></span> y <span v-katex="'Q_3'"></span>)
- el recorrido, el recorrido intercuartílico.
- la desviación mediana, la desviación media, la varianza
- la MEDA
<!--
id: ejercicios_estadistica_20191011
tags: estadistica, teaching, ejercicios
title: Ejercicios sencillos 2019-10-11
date: 11/10/2019
-->

<!--

https://stat.ethz.ch/R-manual/R-devel/library/stats/html/mad.html


> x <- c(3, 2, 3, 2, 2, 6, 5, 2, 5, 4, 2, 3, 4, 4, 4, 4, 3, 4, 3, 5, 3, 4, 4, 5, 2, 1)
> summary(x)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
  1.000   2.250   3.500   3.423   4.000   6.000 

> z = abs(x - median(x))
> z
 [1] 0.5 1.5 0.5 1.5 1.5 2.5 1.5 1.5 1.5 0.5 1.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5
[20] 1.5 0.5 0.5 0.5 1.5 1.5 2.5
> mean(z)
[1] 1.038462


> var(x)
[1] 1.533846
> mad(x, center = median(x), constant = 1, na.rm = FALSE, low = FALSE, high = FALSE)
[1] 0.5
> mad(x, center = mean(x), constant = 1, na.rm = FALSE, low = FALSE, high = FALSE)
[1] 0.5769231





> k = abs(x - mean(x))
> k
 [1] 0.4230769 1.4230769 0.4230769 1.4230769 1.4230769 2.5769231 1.5769231
 [8] 1.4230769 1.5769231 0.5769231 1.4230769 0.4230769 0.5769231 0.5769231
[15] 0.5769231 0.5769231 0.4230769 0.5769231 0.4230769 1.5769231 0.4230769
[22] 0.5769231 0.5769231 1.5769231 1.4230769 2.4230769
> mean(k)
[1] 1.038462


> y = x - 3.5
> y
 [1] -0.5 -1.5 -0.5 -1.5 -1.5  2.5  1.5 -1.5  1.5  0.5 -1.5 -0.5  0.5  0.5  0.5
[16]  0.5 -0.5  0.5 -0.5  1.5 -0.5  0.5  0.5  1.5 -1.5 -2.5
> abs(y)
 [1] 0.5 1.5 0.5 1.5 1.5 2.5 1.5 1.5 1.5 0.5 1.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5
[20] 1.5 0.5 0.5 0.5 1.5 1.5 2.5
> median(abs(y))
[1] 0.5


-->
