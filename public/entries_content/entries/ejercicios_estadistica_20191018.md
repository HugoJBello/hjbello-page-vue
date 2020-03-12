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
tags: estadistica, teaching, ejercicios, hidden
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





octave:1> x = [1,2,8,10,7,4,1]
x =

    1    2    8   10    7    4    1

octave:2> n=x
n =

    1    2    8   10    7    4    1

octave:3> n
n =

    1    2    8   10    7    4    1

octave:4> x = [1,3,5,7,9,11,13]
x =

    1    3    5    7    9   11   13

octave:5> x*n'
ans =  237
octave:6> x*diag(n)
ans =

    1    6   40   70   63   44   13

octave:7> 5/7
ans =  0.71429
octave:8> 5/7
ans =  0.71429
octave:9> ans * 10
ans =  7.1429
octave:10> n
n =

    1    2    8   10    7    4    1

octave:11> x*diag(n)
ans =

    1    6   40   70   63   44   13

octave:12> n*diag(1,1,1,1,1)
error: Invalid call to diag.  Correct usage is:

 -- M = diag (V)
 -- M = diag (V, K)
 -- M = diag (V, M, N)
 -- V = diag (M)
 -- V = diag (M, K)

Additional help for built-in functions and operators is
available in the online version of the manual.  Use the command
'doc <topic>' to search the manual index.

Help and information about Octave is also available on the WWW
at https://www.octave.org and via the help@octave.org
mailing list.
octave:12> n
n =

    1    2    8   10    7    4    1

octave:13> n*diag(1,1,1,1,1,1)
error: Invalid call to diag.  Correct usage is:

 -- M = diag (V)
 -- M = diag (V, K)
 -- M = diag (V, M, N)
 -- V = diag (M)
 -- V = diag (M, K)

Additional help for built-in functions and operators is
available in the online version of the manual.  Use the command
'doc <topic>' to search the manual index.

Help and information about Octave is also available on the WWW
at https://www.octave.org and via the help@octave.org
mailing list.
octave:13> n*diag([1,1,1,1,1,1])
error: operator *: nonconformant arguments (op1 is 1x7, op2 is 6x6)
octave:13> n*diag([1,1,1,1,1,1,1])
ans =

    1    2    8   10    7    4    1

octave:14> n
n =

    1    2    8   10    7    4    1

octave:15> one = [1,1,1,1,1,1,1]
one =

   1   1   1   1   1   1   1

octave:16> n*one'
ans =  33
octave:17> x*n/33
error: operator *: nonconformant arguments (op1 is 1x7, op2 is 1x7)
octave:17> x*n'/33
ans =  7.1818
octave:18> med = ans
med =  7.1818
octave:19> mean = med
mean =  7.1818
octave:20> x - mean
ans =

  -6.18182  -4.18182  -2.18182  -0.18182   1.81818   3.81818   5.81818

octave:21> abs(x-mean)
ans =

   6.18182   4.18182   2.18182   0.18182   1.81818   3.81818   5.81818

octave:22> abs(x-mean)*diag(n)
ans =

    6.1818    8.3636   17.4545    1.8182   12.7273   15.2727    5.8182

octave:23> d = abs(x-mean)*diag(n)
d =

    6.1818    8.3636   17.4545    1.8182   12.7273   15.2727    5.8182

octave:24> d*one'
ans =  67.636
octave:25> /33
parse error:

  syntax error

>>> /33
    ^

octave:25> d*one'/33
ans =  2.0496
octave:26> x
x =

    1    3    5    7    9   11   13

octave:27> x.*x
ans =

     1     9    25    49    81   121   169

octave:28> x2 =ans
x2 =

     1     9    25    49    81   121   169

octave:29> x.*x.*x
ans =

      1     27    125    343    729   1331   2197

octave:30> x3=ans
x3 =

      1     27    125    343    729   1331   2197

octave:31> x3*n'
ans =  17109
octave:32> ans/33
ans =  518.45
octave:33> x.*x.*x.*x
ans =

       1      81     625    2401    6561   14641   28561

octave:34> x4 = ans
x4 =

       1      81     625    2401    6561   14641   28561

octave:35> x4*n'/33
ans =  4915.9
octave:36> 
-->
