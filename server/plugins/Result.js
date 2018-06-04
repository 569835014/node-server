class Result {
    static success(result,status='S0001'){
        result.status=status;
        return result
    }
    static error(result,status='E0001'){
        result.status=status;
        return result
    }
    static abnormal(result,status='A0001'){
        result.status=status;
        return result
    }
}