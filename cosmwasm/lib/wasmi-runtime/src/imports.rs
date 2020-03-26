//! This file should be autogenerated based on the headers created from the .edl file.

use enclave_ffi_types::{Ctx, EnclaveBuffer, UserSpaceBuffer};

extern "C" {
    pub fn ocall_allocate(buffer: *const u8, length: usize) -> UserSpaceBuffer;

    pub fn ocall_read_db(context: Ctx, key: *const u8, key_len: usize) -> EnclaveBuffer;

    pub fn ocall_write_db(
        context: Ctx,
        key: *const u8,
        key_len: usize,
        value: *const u8,
        value_len: usize,
    );
}
