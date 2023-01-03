function solution(A, B, K) {
    if (B < K) {
        return Number(B % K === 0 || A % K === 0);
    }
    let num1 = A < K && A % K !== 0 ? K : A;
    let num2 = B;
    while (num1 % K !== 0) {
        num1++;
    }
    while (num2 % K !== 0) {
        num2--;
    }
    return (num2 - num1) / K + 1;
}
