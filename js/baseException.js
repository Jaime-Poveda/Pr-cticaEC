//Excepciones personalizadas
class BaseException extends Error {
    constructor(message = "", fileName, lineNumber) {
        super(message, fileName, lineNumber);
        this.name = "BaseException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BaseException)
        }
    }
}

//Excepción para controlar el valor vacío
class EmptyValueException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("Error: The parameter " + param + " can't be empty.", fileName, lineNumber);
        this.param = param;
        this.name = "EmptyValueException";
    }
}

//Excepción para controlar el valor no válido
class InvalidValueException extends BaseException {
    constructor(param, value, fileName, lineNumber) {
        super(`Error: The paramenter ${param} has an invalid value. (${param}: ${value})`, fileName, lineNumber);
        this.param = param;
        this.value = value;
        this.name = "InvalidValueException";
    }
}

//Excepción para controlar el tipo no válido
class InvalidTypeException extends BaseException {
    constructor(param, correctType, fileName, lineNumber) {
        super(`Error: The paramenter "${param}" has an invalid type. Type should be ` + correctType + '.', fileName, lineNumber);
        this.param = param;
        this.correctType = correctType;
        this.name = "InvalidTypeException";
    }
}

//Excepción para controlar la creación de clases abstractas
class AbstractClassException extends BaseException {
    constructor(className, fileName, lineNumber) {
        super(`Error: The class  ${className} is abstract.`, fileName, lineNumber);
        this.className = className;
        this.name = "AbstractClassException";
    }
}

//Exporto las clases
export { BaseException, EmptyValueException, InvalidValueException, InvalidTypeException, AbstractClassException };