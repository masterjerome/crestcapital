import { AnimatePresence, motion } from "framer-motion";

type propsDefinition  = {
    children : React.ReactNode
    isVisible : boolean
}


export const More = ({children, isVisible} : propsDefinition) => {

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.section
            key="more-section"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full`}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    );
  };