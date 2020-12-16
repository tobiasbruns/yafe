export function isEmpty(a: any) {
	return isNil(a) || (<string | any[]>a).length === 0;
}

export function isNotNil(a: any) {
	return !isNil(a);
}

export function isNil(a: any) {
	return a === undefined || isNull(a);
}

export function isNotNull(a: any) {
	return a !== null;
}

export function isNull(a: any) {
	return a === null;
}

