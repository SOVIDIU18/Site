putere_ACM_nr += 'putere_ACM_nr >= 31 && putere_ACM_nr<=40'

    }
    if (checkboxîncălzire41_50.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 41 && putere_ACM_nr<=50'

    }
    if (checkboxîncălzire51_60.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 51 && putere_ACM_nr<=60'

    }
    if (checkboxîncălzire61_70.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 61 && putere_ACM_nr<=70'

    }
    // if (checkboxîncălzire71_80.checked) {
    //     if (putere_ACM_nr.length <= 0) {
    //         putere_ACM_nr += "&& ( "

    //     }
    //     else {
    //         putere_ACM_nr += "||"
    //     }

    //     putere_ACM_nr += 'putere_ACM_nr >= 71 && putere_ACM_nr<=80'

    // }
    if (checkboxîncălzire81_90.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 81 && putere_ACM_nr<=90'

    }
    if (checkboxîncălzire91_100.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 91 && putere_ACM_nr<=100'

    }
    if (checkboxîncălzire100.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 101'

    }

    if (putere_ACM_nr.length > 0) {
        putere_ACM_nr += ")"
        filtre += putere_ACM_nr
    }