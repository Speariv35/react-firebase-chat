import { format, isSameDay} from 'date-fns'

const  formatDate = (timestamp, pattern) => {
    if(timestamp) {
        return format(timestamp, pattern);
    }
}
const  shouldShowDay = (previous, message) => {
    const isFirst = !previous;
    if (isFirst) {
        return true;
    }
    const isNewDay = !isSameDay(previous.createdAt.seconds *1000, message.createdAt.seconds *1000);
    return isNewDay;
}

const shouldShowAvatar = (previous, message) => {
    const isFirst = !previous;
    if (isFirst) {
        return true;
    }
    const anotherUser = message.user.id !== previous?.user.id;
    if (anotherUser) {
        return true;
    }
    const hasBeenAWhile = message.createdAt.seconds - previous.createdAt.seconds > 300;
    return hasBeenAWhile;
}

export {formatDate, shouldShowAvatar, shouldShowDay}

